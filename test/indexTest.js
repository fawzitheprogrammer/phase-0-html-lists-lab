require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("the <ul> tag", () => {
  it("exists in the document", () => {
    // find the first <ul> in the HTML file
    const ul = document.querySelector("ul");
    const hint = "The document should have a <ul> element";

    expect(ul, hint).to.exist;
  });

  it("has three child <li> tags with the correct content", () => {
    // find all direct child <li> elements in the <ul>
    const ul = document.querySelector("ul");

    const hint = "The <ul> should have three <li> elements nested inside";
    expect(ul.children, hint).to.have.lengthOf(3);

    // check the values of each <li> element
    const [firstLi, secondLi, thirdLi] = ul.children;

    expect(firstLi).to.have.tagName("li");
    expect(firstLi).to.contain.text("Flutter");

    expect(secondLi).to.have.tagName("li");
    expect(secondLi).to.contain.text("Laravel");

    expect(thirdLi).to.have.tagName("li");
    expect(thirdLi).to.contain.text("Vue JS");
  });

  it("contains a nested <ul> tag within a <li>", () => {
    // find a <ul> nested inside a <li> nested inside a <ul>
    const ul = document.querySelector("ul");
    const hint = `
      The <ul> must contain another <ul> nested *inside* a <li>:
      <ul>
        <li>
           Laravel
          <ul></ul>
        </li>
      </ul>
    `;

    expect(ul, hint).to.have.descendant("li > ul");
  });

  it("contains three <li> nested within the nested <ul> with the correct content", () => {
    const ul = document.querySelector("ul");
    const hint = `
      The *nested* <ul> must contain three nested <li>:
      <ul>
        <li>
           Laravel
          <ul>
          <li>TailWind Css</li>
          <li>Livewire</li>
          <li>Vuefiy</li>
          </ul>
        </li>
      </ul>
    `;

    expect(ul, hint).to.have.descendants("li > ul > li").and.have.length(3);
  });
});
describe("the <ol> tag", () => {
  it("exists in the document", () => {
    // find the first <ol> in the HTML file
    const ol = document.querySelector("ol");
    const hint = "The document should have a <ol> element";

    expect(ol, hint).to.exist;
  });

  it("has five child <li> tags with the correct content", () => {
    // find all direct child <li> elements in the <ul>
    const ol = document.querySelector("ol");
    const hint1 = "The <ol> should have five <li> elements";
    expect(ol, hint1).to.have.descendants("li").and.have.length(5);

    // Check the content of each <li>
    const [first, second, third, fourth, fifth] = ol.querySelectorAll("li");

    expect(first).to.contain.text("C++");
    expect(second).contain.text("C#");
    expect(third).contain.text("Java");
    expect(fourth).contain.text("PHP");
    expect(fifth).contain.text("JavaScript");
  });
});
