## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Краткое описание функционала:
Чтобы положить деньги на баланс, нужно нажать на купюру нужного номинала. Баланс отображается ниже в соответствующем поле. 
###
Чтобы получить сдачу нажать Pick up change. При отсутствии разменных денег (каждый номинал по 10 штук, 5р - 50 штук, 1р - 100шт) сдача конфетами. 
Полученная сдача отображается, пока не будет внесена новая купюра. Так же если сдача выдавалась конфетами, конфеты будут отображаться, пока не внести новый платеж.
###
При отсутствии товара изменится курсор и карточка товара будет прозрачной. 
### 
Товар попадает в зону выдачи при нажатии на карточку товара и при наличии на балансе доступных средств. При выдаче сдачи зона выдачи товара очищается. У каждой карточки товара есть счетчик количества добавленных единиц.


