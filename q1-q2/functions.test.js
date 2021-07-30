import {divide,toPascalCase} from "./functions";

describe("bootcamp()", () => {

    describe("divide()", () => {
        it("should divide given two numbers", () => {
            
            const dividend=10;
            const divisor=2

            const result=divide(dividend,divisor)

            expect(result).toBe(5);
        });

        it("should throw error when dividend is not a number", () => {

            const dividend="Nan";
            const divisor=2;

            const thrown = ()=> divide(dividend,divisor)

    
            expect(thrown).toThrow("Invalid argument!");
        });

        it("should throw error when divisor is not a number", () => {

            const dividend=10;
            const divisor="Nan";

            const thrown = ()=> divide(dividend,divisor)

    
            expect(thrown).toThrow("Invalid argument!");
        });

        it("should throw error when divisor is zero", () => {

            const dividend=10;
            const divisor=0;

            const thrown = ()=> divide(dividend,divisor)

            expect(thrown).toThrow("Divide by zero!");
        });
    });

    describe("toPascalCase()", () => {

        it("should make pascal case given sentence", () => {

            const sentence="bootcamp"

            const result=toPascalCase(sentence)
            
            expect(result).toBe("Bootcamp");
        });


        it("should return empty when given sentence is an empty string", () => {
            
            const sentence=""

            const result=toPascalCase(sentence)
            
            expect(result).toBe("");

        });

        it("should make pascal case given sentence when sentence contains more than one word", () => {

            const sentence="peace at home, peace in the world"

            const result=toPascalCase(sentence)
            
            expect(result).toBe("Peace At Home, Peace In The World");
        
        });
    });

});