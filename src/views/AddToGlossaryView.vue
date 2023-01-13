<template>
  <div class="Glossary container mt-3">
    <div class="row">
      <div class="col">
        <form action="">
          <h3>Добавить новый узел или связь</h3>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Заголовок</label
            >
            <input type="text" class="form-control" id="title" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Описание</label
            >
            <textarea class="form-control" id=" "></textarea>
          </div>
          <button class="btn btn-secondary" type="submit">Отправить</button>
        </form>
      </div>
      <div class="col">
        <form id="post-edge" action="" method="post">
          <ul class="list">
            <h3>Добавить новое соединение или соединения</h3>
            <li class="list_element">
              <select class="form-select" aria-label="Default select example">
                <option selected>Откуда</option>
                <option value="1">Пример 1</option>
                <option value="2">Пример 2</option>
                <option value="3">Пример 3</option>
              </select>
            </li>
            <li class="list_element">
              <select class="form-select" aria-label="Default select example">
                <option selected>Куда</option>
                <option value="1">Пример 1</option>
                <option value="2">Пример 2</option>
                <option value="3">Пример 3</option>
              </select>
            </li>
            <li>
              <button class="btn btn-secondary" type="submit">Отправить</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.list_element {
  margin-top: 8px;
  margin-bottom: 8px;
}
.list {
  list-style-type: none;
}
</style>
