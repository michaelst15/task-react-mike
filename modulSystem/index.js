export class Table {

  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
  
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });
    return open + close;
  }
  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
      <tr>
      <td>${d[0]}</td>
      <td>${d[1]}</td>
      <td>${d[2]}</td>
      <td>${d[3]}</td>
      </tr>
      `;
    });
    return open + close;
  }

  wrap(element) {
    let tableWrap = 
     "<table class='table table-hover'>"+
      this.createHeader(this.init.header) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = tableWrap;
  }
}


