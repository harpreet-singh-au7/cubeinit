cube(`Departments`, {
  sql: `SELECT * FROM employees.departments`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [Name],
    },
  },

  dimensions: {
    deptNo: {
      sql: `dept_no`,
      type: `string`,
      primaryKey: true,
    },

    Name: {
      sql: `dept_name`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
