export class CodeAnalyzer {
    static analyzeComplexity(code: string): number {
      
      const functionCount = (code.match(/function/g) || []).length;
      const rerenderPotential = (code.match(/render/g) || []).length;
      
      return functionCount + rerenderPotential;
    }
  
    static detectMemoizationNeeds(code: string): boolean {
      
      return code.includes('useState') || code.includes('useEffect');
    }
  }