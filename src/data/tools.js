export const toolLevels = {
  training: { label: 'Formación', filledSegments: 1 },
  basic: { label: 'Básico', filledSegments: 2 },
  intermediate: { label: 'Intermedio', filledSegments: 3 },
  advanced: { label: 'Avanzado', filledSegments: 4 },
  unspecified: { label: 'Nivel no especificado', filledSegments: 0 },
};

export const tools = [
  {
    name: 'Python',
    icon: 'python.svg',
    description: 'Análisis de datos y automatización',
    level: 'intermediate',
  },
  {
    name: 'MySQL',
    icon: 'mysql.svg',
    description: 'Consultas y bases de datos',
    level: 'intermediate',
  },
  {
    name: 'SQL Server',
    icon: 'microsoftsqlserver.svg',
    description: 'Modelado y control de información',
    level: 'intermediate',
  },
  {
    name: 'Power BI',
    icon: 'powerbi.svg',
    description: 'Indicadores y tableros interactivos',
    level: 'intermediate',
  },
  {
    name: 'Excel',
    icon: 'microsoftexcel.svg',
    description: 'Análisis y organización de información',
    level: 'advanced',
  },
  {
    name: 'PHP',
    icon: 'php.svg',
    description: 'Usuarios, roles y arquitectura MVC',
    level: 'training',
  },
  {
    name: 'Talend',
    icon: 'talend.svg',
    description: 'Automatización de información',
    level: 'basic',
  },
  {
    name: 'Google Workspace',
    icon: 'google.svg',
    description: 'Herramientas de colaboración',
    level: 'unspecified',
  },
];
