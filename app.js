///////// Prompt /////////

// ### Problem #1[]
// (https://full-time-pre-october.learnhowtoprogram.com/react/functional-programming-with-javascript/whiteboard-practice-composition#problem-1)

// Compose a function called `paint()` and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// `> painter1.paints()`
// `"Paints green!"`
// `> painter2.paints()`
// `"Paints yellow!"`
// `> painter3.paints()
// "Paints red!"`

//////// Solution ///////

const canPaint = function (painter) {
  return  (color) => {
    const obj = {
      paints: function () {
        return `Paints ${color}`
      }
    }
    return obj;
  }
}

const painter1 = canPaint('Painter1')('green')
painter1.paints()