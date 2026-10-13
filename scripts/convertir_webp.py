"""Convierte PNG pendientes a WebP sin pérdida y actualiza referencias locales.

Ejecutar: python scripts/convertir_webp.py
Requiere Pillow: python -m pip install Pillow
Conserva los originales y no sobrescribe imágenes WebP existentes.
"""

from pathlib import Path
from urllib.parse import unquote, urlsplit
import re

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ATTRIBUTE = re.compile(r'((?:src|href)\s*=\s*)([\"\'])([^\"\']+)(\2)', re.I)


def main():
    converted = set()
    before = after = 0
    for directory in (ROOT / "assets", ROOT / "pages"):
        for source in sorted(directory.rglob("*.png")):
            target = source.with_suffix(".webp")
            if target.exists():
                continue
            with Image.open(source) as original:
                original.save(target, "WEBP", lossless=True, method=6, exact=True)
                with Image.open(target) as result:
                    assert result.size == original.size, target
                    assert result.convert("RGBA").tobytes() == original.convert("RGBA").tobytes(), target
            converted.add(source.resolve())
            before += source.stat().st_size
            after += target.stat().st_size
            print(f"Convertida: {source.relative_to(ROOT)}")

    # También repara referencias pendientes si una ejecución previa fue interrumpida.
    for page in ROOT.rglob("*.html"):
        if ".git" in page.parts:
            continue

        def replace(match):
            prefix, quote, reference, _ = match.groups()
            url = urlsplit(reference)
            if url.scheme or url.netloc or not url.path.lower().endswith(".png"):
                return match.group(0)
            source = (page.parent / unquote(url.path)).resolve()
            if not source.is_relative_to(ROOT) or not source.with_suffix(".webp").exists():
                return match.group(0)
            updated = reference[:len(url.path) - 4] + ".webp" + reference[len(url.path):]
            return f"{prefix}{quote}{updated}{quote}"

        content = page.read_text(encoding="utf-8")
        updated = ATTRIBUTE.sub(replace, content)
        if updated != content:
            page.write_text(updated, encoding="utf-8")
            print(f"Referencias actualizadas: {page.relative_to(ROOT)}")

    print(f"Imágenes convertidas: {len(converted)}")
    if before:
        print(f"Peso: {before:,} -> {after:,} bytes ({(1 - after / before):.1%} menos)")


if __name__ == "__main__":
    main()
