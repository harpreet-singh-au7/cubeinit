cube(`Employees`, {
  sql: `SELECT * FROM employees.employees`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    DeptEmp: {
      relationship: `belongsTo`,
      sql: `${DeptEmp}.emp_no = ${Employees}.emp_no and ${DeptEmp}.to_date = '9999-01-01'`,
    },
    Salaries: {
      relationship: `hasMany`,
      sql: `${Employees}.emp_no = ${Salaries}.emp_no and ${Salaries}.to_date = '9999-01-01'`,
    },
  },
  measures: {
    count: {
      sql: `emp_no`,
      type: `count`,
    },
    averageBirth: {
      sql: `year(birth_date)`,
      type: `avg`,
    },
    averageHire: {
      sql: `year(hire_date)`,
      type: `avg`,
    },
  },

  dimensions: {
    empNo: {
      sql: `emp_no`,
      type: `number`,
      primaryKey: true,
    },

    gender: {
      sql: `gender`,
      type: `string`,
    },

    birthYear: {
      sql: `year(birth_date)`,
      type: `number`,
    },

    hireYear: {
      sql: `year(hire_date)`,
      type: `number`,
    },
  },

  dataSource: `default`,
});
