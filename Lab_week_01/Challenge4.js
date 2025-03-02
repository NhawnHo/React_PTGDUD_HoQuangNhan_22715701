console.log('Challenge 4');

const tip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
for (let i = 0; i < bills.length; i++) {
    console.log(
        `Hóa đơn là ${bills[i]}, tiền boa là ${tip(
            bills[i],
        )}, tổng giá trị là ${bills[i] + tip(bills[i])}`,
    );
}
