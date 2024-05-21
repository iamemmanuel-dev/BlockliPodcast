const truncateText = (text = '', maxlength = 20, ellipses = true) => {
  return text.length > maxlength
    ? `${text.substring(0, maxlength)}${ellipses ? '...' : ''}`
    : text
}

export default truncateText
