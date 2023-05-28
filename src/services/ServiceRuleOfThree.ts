export interface handleCalculateParams {
  numberOne: string;
  numberTwo: string;
  numberThree: string;
}
export class ServiceRuleOfThree {
  calculate({ numberOne, numberThree, numberTwo }: handleCalculateParams) {
    if (isNaN(Number(numberOne))) {
      throw new Error('Informe um número valido no primeiro campo');
    }
    if (isNaN(Number(numberTwo))) {
      throw new Error('Informe um número valido  no segundo campo');
    }
    if (isNaN(Number(numberThree))) {
      throw new Error('Informe um número valido  no terceiro campo');
    }
    if (isNaN((Number(numberTwo) * Number(numberThree)) / Number(numberOne))) {
      throw new Error('Confira se todos  os campos contém números');
    }
    return (Number(numberTwo) * Number(numberThree)) / Number(numberOne);
  }
}
