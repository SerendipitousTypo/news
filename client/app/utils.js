

//return string before '_'
export const sanitize = (string) => (
  string.replace(/_.*/, '')
);