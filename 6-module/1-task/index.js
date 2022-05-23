/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #headNames = ''
  #data = []
  #elem = ''
  constructor(rows, headNames = ['Name', 'Age', 'Salary', 'City', '']) {
    this.#headNames = headNames;
    this.#data = rows;
    this.#elem = document.createElement('table');
    this.#elem.addEventListener('click', this.deleteRow);
    this.elem = this.#elem;
    this.render();
  }

  deleteRow() {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentElement.parentElement.remove();
    }
  }

  createRow(row) {
    return `<tr>
    ${Object.values(row).map(cell => `<td>${cell}</td>`).join('')}
    <td><button>X</button></td>
    </tr>`;
  }

  render() {
    const template = `
    <thead>
      <tr>${Object.values(this.#headNames).map(cell => `<th>${cell}</th>`).join('')}</tr>
    </thead>
    <tbody>
      ${this.#data.map(item => this.createRow(item)).join('')}
    </tbody>`;
    this.#elem.insertAdjacentHTML('afterbegin', template);
  }
}
