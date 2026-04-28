// Formatea número a precio chileno: 900000 → "$900.000"
export function formatCLP(valor: number): string {
  return "$" + valor.toLocaleString("es-CL")
}

// Enmascara email: "juan@gmail.com" → "ju***@gmail.com"
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@")
  return user.slice(0, 2) + "***@" + domain
}

// Valida email
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Valida nombre mínimo 3 caracteres
export function isValidName(name: string): boolean {
  return name.trim().length >= 3
}
