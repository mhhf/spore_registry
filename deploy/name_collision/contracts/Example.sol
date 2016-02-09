contract Example {
  
  uint public a1;
  uint public a2;
  uint public a3;
  uint public a4;

  function Example() {
    a1 = 0;
    a2 = 0;
    a3 = 0;
    a4 = 0;
  }
  
  function a() returns (uint){
    a1++;
    return a1;
  }

  function b(uint n) {
    a2++;
  }

  function c(string s, uint n) {
    a3++;
  }

  function d(uint n, uint m) {
    a4++;
  }
}
