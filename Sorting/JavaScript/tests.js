var chai = require("chai");
var should = chai.should();

require("./sorting");

describe("Standard Bubble Sorting", function () {
  it("should not fail for empty arrays", function (){
    var array = [];
    array.bubbleSort();
    array.should.have.length(0);
  });

  it("should return the same array for arrays with one item", function () {
    var array = [1];

    array.bubbleSort();
    array.should.have.length(1);
    array.should.deep.equal([1]);
  });

  it("should preserve an N length array", function () {
    var array = [1, 2, 3, 4];
    array.bubbleSort();
    array.should.have.length(4);
    array.should.deep.equal([1, 2, 3, 4]);
  });

  it("should sort a two item array", function (){
    var array = [2, 1];
    array.bubbleSort();

    array.should.have.length(2);
    array.should.deep.equal([1, 2]);
  });

  it("should sort a three item array", function () {
    var array = [3, 2, 1];
    array.bubbleSort();

    array.should.have.length(3);
    array.should.deep.equal([1, 2, 3]);

    array = [2, 3, 1];
    array.bubbleSort();
    array.should.have.length(3);
    array.should.deep.equal([1, 2, 3]);

    array = [1, 3, 2];
    array.bubbleSort();
    array.should.have.length(3);
    array.should.deep.equal([1, 2, 3]);
  });

  it("should sort an N item array", function () {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    array.bubbleSort();

    array.should.have.length(9);
    array.should.deep.equal([3, 9, 34, 198, 200, 203, 746, 764, 984]);
  });
});

describe("Bubble Sorting without \"do while\" loops", function () {
  it("should sort an N item array", function () {
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    array.forBubbleSort();

    array.should.have.length(9);
    array.should.deep.equal([3, 9, 34, 198, 200, 203, 746, 764, 984]);
  });
});

describe("Standard Quicksort", function (){
  it("should sort an array with N elements", function (){
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    array.quickSort();

    array.should.have.length(9);
    array.should.deep.equal([3, 9, 34, 198, 200, 203, 746, 764, 984]);
  });
});

describe("Functional Quicksort", function (){
  it("should sort an array with N elements", function (){
    var array = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    array = array.functionalQuickSort();

    array.should.have.length(9);
    array.should.deep.equal([3, 9, 34, 198, 200, 203, 746, 764, 984]);
  });
})