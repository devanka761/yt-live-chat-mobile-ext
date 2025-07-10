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

function setStyle(): void {
  const head = document.head
  const style = document.createElement("style")
  style.innerHTML = `yt-live-chat-renderer *{font-size:18px !important;line-height:18px !important}yt-live-chat-text-message-renderer #content,yt-live-chat-legacy-paid-message-renderer #content{overflow:initial !important}yt-live-chat-item-list-renderer #items{overflow:hidden !important}yt-live-chat-item-list-renderer #item-scroller{overflow:hidden !important}yt-live-chat-header-renderer,yt-live-chat-message-input-renderer{display:none !important}yt-live-chat-text-message-renderer #timestamp{font-size:16px !important;line-height:16px !important}yt-live-chat-text-message-renderer #author-name[type=owner],yt-live-chat-text-message-renderer #author-name.owner,yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type=owner]{color:#804000 !important}yt-live-chat-text-message-renderer #author-name[type=moderator],yt-live-chat-text-message-renderer #author-name.moderator,yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type=moderator]{color:#400080 !important}yt-live-chat-text-message-renderer #author-name[type=member],yt-live-chat-text-message-renderer #author-name.member,yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type=member]{color:#095531 !important}yt-live-chat-text-message-renderer #author-name{font-size:20px !important;line-height:20px !important}yt-live-chat-text-message-renderer #message,yt-live-chat-text-message-renderer #message *{font-size:18px !important;line-height:18px !important}yt-live-chat-paid-message-renderer #author-name,yt-live-chat-paid-message-renderer #author-name *,yt-live-chat-legacy-paid-message-renderer #event-text,yt-live-chat-legacy-paid-message-renderer #event-text *{font-size:20px !important;line-height:20px !important}yt-live-chat-paid-message-renderer #purchase-amount,yt-live-chat-paid-message-renderer #purchase-amount *,yt-live-chat-legacy-paid-message-renderer #detail-text,yt-live-chat-legacy-paid-message-renderer #detail-text *{font-size:18px !important;line-height:18px !important}yt-live-chat-paid-message-renderer #content,yt-live-chat-paid-message-renderer #content *{font-size:18px !important;line-height:18px !important}yt-live-chat-paid-message-renderer{margin:4px 0 !important}yt-live-chat-legacy-paid-message-renderer{background-color:#095531 !important;margin:4px 0 !important}yt-live-chat-text-message-renderer a,yt-live-chat-legacy-paid-message-renderer a{text-decoration:none !important}`
  head.append(style)
}

function startContent(): void {
  setViewport()
  setHttpEquivContent()
  setCharset()
  setStyle()
}

startContent()
