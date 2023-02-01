cube(`Salaries`, {
  sql: `SELECT * FROM employees.salaries`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    Average: {
      sql: `salary`,
      type: `avg`,
    },
    Sum: {
      sql: `salary`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `${CUBE}.emp_no || '-' || ${CUBE}.from_date`,
      type: `string`,
      primaryKey: true,
    },
    fromDate: {
      sql: `from_date`,
      type: `time`,
    },

    toDate: {
      sql: `to_date`,
      type: `time`,
    },
  },

  dataSource: `default`,
});
