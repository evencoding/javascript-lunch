import { $ } from '../utils/dom';

const header = `
  <header class="gnb">
    <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
    <button type="button" class="modal-open-button gnb__button" aria-label="음식점 추가">
      <img src="./add-button.png" alt="음식점 추가" />
    </button>
  </header>`;

export default class Header {
  constructor() {
    $('body').insertAdjacentHTML('beforebegin', header);
    this.registerEvent();
  }

  registerEvent() {
    $('.modal-open-button').addEventListener('click', this.onClickModalOpen.bind(this));
  }

  onClickModalOpen() {
    $('.add-restaurant-form').reset();
    this.toggleModal();
  }

  toggleModal() {
    $('.modal').classList.toggle('modal--open');
  }
}