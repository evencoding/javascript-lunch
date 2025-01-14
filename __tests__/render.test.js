/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import RestaurantList from '../src/components/RestaurantList';

describe('RestaurantList 랜더링 테스트', () => {
  document.body.innerHTML = ` 
  <!-- GNB -->
  <header class="gnb">
    <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
    <button type="button" class="modal-open-button gnb__button" aria-label="음식점 추가">
      <img src="./add-button.png" alt="음식점 추가" />
    </button>
  </header>

  <main>
    <!-- 카테고리/정렬 필터 -->
    <section class="restaurant-filter-container">
      <select name="category" id="category-filter" class="restaurant-filter">
        <option value="전체">전체</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="아시안">아시안</option>
        <option value="기타">기타</option>
      </select>

      <!-- 정렬 셀렉트 박스 -->
      <select name="sorting" id="sorting-filter" class="restaurant-filter">
        <option value="name">이름순</option>
        <option value="distance">거리순</option>
      </select>
    </section>

    <!-- 음식점 목록 -->
    <section class="restaurant-list-container"></section>

    <!-- 음식점 추가 모달 -->
    <div class="modal">
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <h2 class="modal-title text-title">새로운 음식점</h2>
        <form class="add-restaurant-form">
          <!-- 카테고리 -->
          <div class="form-item form-item--required">
            <label for="category text-caption">카테고리</label>
            <select name="category" id="category" required>
              <option value="">선택해 주세요</option>
              <option value="한식">한식</option>
              <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option>
              <option value="아시안">아시안</option>
              <option value="기타">기타</option>
            </select>
          </div>

          <!-- 음식점 이름 -->
          <div class="form-item form-item--required">
            <label for="name text-caption">이름</label>
            <input type="text" name="name" id="name" required />
          </div>

          <!-- 거리 -->
          <div class="form-item form-item--required">
            <label for="distance text-caption">거리(도보 이동 시간) </label>
            <select name="distance" id="distance" required>
              <option value="">선택해 주세요</option>
              <option value="5">5분 내</option>
              <option value="10">10분 내</option>
              <option value="15">15분 내</option>
              <option value="20">20분 내</option>
              <option value="30">30분 내</option>
            </select>
          </div>

          <!-- 설명 -->
          <div class="form-item">
            <label for="description text-caption">설명</label>
            <textarea name="description" id="description" cols="30" rows="5"></textarea>
            <span class="help-text text-caption">메뉴 등 추가 정보를 입력해 주세요.</span>
          </div>

          <!-- 링크 -->
          <div class="form-item">
            <label for="link text-caption">참고 링크</label>
            <input type="text" name="link" id="link" />
            <span class="help-text text-caption"
              >매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span
            >
          </div>

          <!-- 취소/추가 버튼 -->
          <div class="button-container">
            <button
              type="button"
              class="modal-close-button button button--secondary text-caption"
            >
              취소하기
            </button>
            <button class="button button--primary text-caption">추가하기</button>
          </div>
        </form>
      </div>
    </div>
  </main>`;

  test('음식점 리스트를 화면에 출력한다', () => {
    const dummyRestaurants = [
      {
        category: '한식',
        name: '돈카라',
        distance: '10',
      },
    ];

    RestaurantList.render(dummyRestaurants);

    const name = screen.getByText('돈카라');
    const distance = screen.getByText('캠퍼스부터 10분 내');

    expect(name).toBeInTheDocument();
    expect(distance).toBeInTheDocument();
  });
});
