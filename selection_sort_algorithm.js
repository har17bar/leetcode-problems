// Custom implemented selection sort algorithm in javascript

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function selection_sort(numbers) {
    if (!numbers || !numbers.length) {
        return
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        let min_index = i
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[min_index] > numbers[j]) {
                min_index = j
            }
        }
        tmp = numbers[i]
        numbers[i] = numbers[min_index]
        numbers[min_index] = tmp
    }
    return numbers
}

console.log(selection_sort([284, 44, 6, 2, 1, 5, 63, 87, 99, 4, 0]));