export const checkIfInputIsEmpty = (value: any) : boolean => {
  return value === null || value === '' || value.length == 0;
}

export const isFileImage = (file: string) => {
  let reg = /(.*?)\.(jpg|bmp|jpeg|png)$/;
  return file.match(reg);
}
