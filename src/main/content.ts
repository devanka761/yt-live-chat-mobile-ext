import "../scss/content.scss"

function rewriteCharset(meta: HTMLMetaElement): void {
  meta.setAttribute("charset", "UTF-8")
}

function setCharset(): void {
  const charsetExists: HTMLMetaElement | null = document.querySelector('meta[charset="UTF-8"]')
  if (!charsetExists) {
    const newCharset: HTMLMetaElement = document.createElement("meta")
    rewriteCharset(newCharset)
    document.head.prepend(newCharset)
    return
  }
  const charsetValue: string | null = charsetExists.getAttribute("charset")
  if (charsetValue && charsetValue.toLowerCase() === "utf-8") return
  rewriteCharset(charsetExists)
}

function rewriteHttpEquivContent(meta: HTMLMetaElement): void {
  meta.setAttribute("http-equiv", "X-UA-Compatible")
  meta.setAttribute("content", "IE=edge")
}

function setHttpEquivContent(): void {
  const equivExists: HTMLMetaElement | null = document.querySelector('meta[http-equiv="X-UA-Compatible"]')
  if (!equivExists) {
    const newEquiv: HTMLMetaElement = document.createElement("meta")
    rewriteHttpEquivContent(newEquiv)
    document.head.prepend(newEquiv)
    return
  }
  const equivValue: string | null = equivExists.getAttribute("http-equiv")
  const contentValue: string | null = equivExists.getAttribute("content")
  if (equivValue && equivValue.toLowerCase() === "x-ua-compatible" && contentValue && contentValue.toLowerCase() === "ie=edge") return
  rewriteHttpEquivContent(equivExists)
}

function rewriteViewport(meta: HTMLMetaElement): void {
  meta.setAttribute("name", "viewport")
  meta.setAttribute("content", "width=device-width, initial-scale=1.0")
}

function setViewport(): void {
  const viewportExists: HTMLMetaElement | null = document.querySelector('meta[name="viewport"]')
  if (!viewportExists) {
    const newViewport: HTMLMetaElement = document.createElement("meta")
    rewriteViewport(newViewport)
    document.head.prepend(newViewport)
    return
  }
  const nameValue: string | null = viewportExists.getAttribute("name")
  const contentValue: string | null = viewportExists.getAttribute("content")
  if (nameValue && nameValue.toLowerCase() === "viewport" && contentValue && contentValue.toLowerCase() === "width=device-width, initial-scale=1.0") return
  rewriteViewport(viewportExists)
}

function startContent(): void {
  setViewport()
  setHttpEquivContent()
  setCharset()
}

startContent()
