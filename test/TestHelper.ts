export default class T {

    public readonly name: string;
    private readonly _tests: [string, (() => void)][];

    constructor(testsuite: string, tests: [string, () => void][]) {
        this.name = testsuite
        this._tests = tests;
    }

    /**
     * RUns the test, returns the error messages.
     * Returns an empty list if successful
     * @constructor
     */
    public Run() : ({testsuite: string, name: string, msg: string} []) {
        const failures: {testsuite: string, name: string, msg: string} []  = []
        for (const [name, test] of this._tests) {
            try {
                test();
            } catch (e) {
                failures.push({testsuite: this.name, name: name, msg: ""+e});
            }
        }
        if (failures.length == 0) {
            return undefined
        } else {
           return failures
        }
    }

    static assertContains(needle: string, actual: string) {
        if (actual.indexOf(needle) < 0) {
            throw `The substring ${needle} was not found`
        }
    }

    static isTrue(b: boolean, msg: string) {
        if (!b) {
            throw "Expected true, but got false: " + msg
        }
    }
    
    static equals(a, b, msg?){
        if(a !== b){
            throw "Not the same: "+(msg??"")+"\n" +
            "Expcected: "+a+"\n" +
            "Got      : "+b
        }
    }

    static isFalse(b: boolean, msg: string) {
        if (b) {
            throw "Expected false, but got true: " + msg
        }
    }
}
