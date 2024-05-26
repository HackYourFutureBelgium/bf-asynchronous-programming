export const filterHandler = (event) => {
    if (event.type != 'click' && event.key != 'Enter') return;

    const nameFilterValue = document.getElementById('input-name').value;
    const heightFilterValue = document.getElementById('input-height').value;
    const birthYearFilterValue =
        document.getElementById('input-birthyear').value;

    console.log(
        nameFilterValue,
        heightFilterValue,
        birthYearFilterValue,
        event,
    );
};
