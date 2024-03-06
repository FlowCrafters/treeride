function hexToRgba(hex: string, alpha: number) {
  const rColor = Number.parseInt(hex.slice(1, 3), 16)
  const gColor = Number.parseInt(hex.slice(3, 5), 16)
  const bColor = Number.parseInt(hex.slice(5, 7), 16)

  return `rgba(${rColor}, ${gColor}, ${bColor}, ${alpha})`
}

export { hexToRgba }
