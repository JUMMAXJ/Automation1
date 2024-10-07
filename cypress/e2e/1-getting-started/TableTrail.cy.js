/*describe('DemoQA WebTables', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/webtables');
    });
  
    it('should get all rows of the table', () => {
      cy.get('.rt-tbody .rt-tr-group').each(($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get('.rt-td').each(($cell, cellIndex, $cells) => {
            cy.log(`Row ${index + 1}, Cell ${cellIndex + 1}: ${$cell.text()}`);
          });
        });
      });
    });
  });*/