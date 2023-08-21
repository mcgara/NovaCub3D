export function partial(element) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', element.url, true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    element.outerHTML = this.responseText;
  };
  xhr.send();
}

class Partial extends HTMLElement {
  get url() { return this.getAttribute("url"); }
  set url(value="") { this.setAttribute("url", value); }

  constructor () {
    super()
    console.log(this.parentElement.innerHTML)
    partial(this);
  }
}

customElements.define("partial-html", Partial);
