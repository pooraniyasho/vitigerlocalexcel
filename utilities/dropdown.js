export async function selectByValue(element, value) {
    await element.selectOption(value);
}

export async function selectByLabel(element, text) {
    await element.selectOption({ label: text });
}

export async function selectByIndex(element, index) {
    await element.selectOption({ index: index });
}