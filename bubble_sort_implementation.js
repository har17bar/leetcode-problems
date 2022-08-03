// Custom implemented bubble sort algorithm in javascript

const swap = (arr, first, second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function bubble_sort(numbers) {
    if (!numbers || !numbers.length) {
        return
    }
    alreadySorted = numbers.length - 1
    while (alreadySorted) {
        index = 0
        while (index != alreadySorted) {
            if (numbers[index] > numbers[index + 1]) {
                swap(numbers, index, index + 1)
            }
            index++
        }
        alreadySorted--
    }
    return numbers
}


const numbers = [284, 44, 6, 2, 1, 5, 63, 87, 99, 4, 0]

console.log(bubble_sort([284, 44, 6, 2, 1, 5, 63, 87, 99, 4, 0]));

function bubble_sort_rec(numbers) {
    if (numbers.length <= 1) return numbers;

    let check = false;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            swap(numbers, i, i + 1)
            check = true
        }
    }

    if (!check) {
        return numbers
    }

    return bubble_sort_rec(numbers)
}

console.log(bubble_sort_rec([284, 44, 6, 2, 1, 5, 63, 87, 99, 4, 0]));