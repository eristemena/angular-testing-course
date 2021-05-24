import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

  let logger: { log: jasmine.Spy };
  let calculator: CalculatorService;

  beforeEach(() => {
    logger = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: logger }
      ]
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    const result = calculator.add(2, 3);

    expect(result).toBe(5);

    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should substract two numbers', () => {
    const result = calculator.subtract(2, 3);

    expect(result).toBe(-1);
  });
});
