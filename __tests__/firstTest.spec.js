function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
describe("Filter function", () => {
  it("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

  });

  it('will check the matchers and pass', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
  });
  
  // Snapshot
  exports[`will check the matchers and pass 1`] = `
  Object {
    "createdAt": Any<Date>,
    "id": Any<Number>,
    "name": "LeBron James",
  }
  `;

  it('will check the values and pass', () => {
    const user = {
      createdAt: new Date(),
      name: 'Bond... James Bond',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      name: 'Bond... James Bond',
    });
  });
  
  // Snapshot
  exports[`will check the values and pass 1`] = `
  Object {
    "createdAt": Any<Date>,
    "name": 'Bond... James Bond',
  }
  `;
});