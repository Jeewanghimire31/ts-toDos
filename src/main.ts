import './style.css';

// bad
const atom = {
  value: 1,

  addValue: function (value: number) {
    return atom.value + value;
  },
};
