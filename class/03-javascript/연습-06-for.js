let persons = [
	{ name: '철수', age: 17 },
	{ name: '영희', age: 22 },
	{ name: '도우너', age: 5 },
	{ name: '그루트', age: 65 },
	{ name: '도비', age: 3 },
];
// undefined
for (let count = 0; count < persons.length; count++) {
	if (persons[count].age >= 19) {
		console.log('성인입니다');
	} else {
		console.log('미성년자입니다.');
	}
}
// VM5851:5 미성년자입니다.
// VM5851:3 성인입니다
// VM5851:5 미성년자입니다.
// VM5851:3 성인입니다
// VM5851:5 미성년자입니다.
// undefined
for (let count = 0; count < persons.length; count++) {
	if (persons[count].age >= 19) {
		console.log(persons[count].name + '님은 성인입니다');
	} else {
		console.log(persons[count].name + '님은 미성년자입니다.');
	}
}
// VM6195:5 철수님은 미성년자입니다.
// VM6195:3 영희님은 성인입니다
// VM6195:5 도우너님은 미성년자입니다.
// VM6195:3 그루트님은 성인입니다
// VM6195:5 도비님은 미성년자입니다.
// undefined

const fruits = [
	{ number: 1, title: '레드향' },
	{ number: 2, title: '샤인머스켓' },
	{ number: 3, title: '산청딸기' },
	{ number: 4, title: '한라봉' },
	{ number: 5, title: '사과' },
	{ number: 6, title: '애플망고' },
	{ number: 7, title: '딸기' },
	{ number: 8, title: '천혜향' },
	{ number: 9, title: '과일선물세트' },
	{ number: 10, title: '귤' },
];

for (let i = 0; i < fruits.length; i++) {
	console.log(`${fruits[i].number} ${fruits[i].title}`);
}

// VM6447:15 1 레드향
// VM6447:15 2 샤인머스켓
// VM6447:15 3 산청딸기
// VM6447:15 4 한라봉
// VM6447:15 5 사과
// VM6447:15 6 애플망고
// VM6447:15 7 딸기
// VM6447:15 8 천혜향
// VM6447:15 9 과일선물세트
// VM6447:15 10 귤
// undefined
