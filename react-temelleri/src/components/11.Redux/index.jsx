import ReduxCounterExample from "./counter-example"

function Redux() {
  return (
    <div>
      <h2>Redux</h2>
      <describe>
        Redux en popüler state management aracıdır. <br />
        <blockquote> <i>
          Redux Toolkit allows us to write "mutating" logic in reducers. It
          doesn't actually mutate the state because it uses the Immer library,
          which detects changes to a "draft state" and produces a brand new
          immutable state based off those changes
          </i> </blockquote>
        <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noreferrer">Redux Docs</a>
      </describe>
      <hr />

      <h4>Örnek Çıktıları:</h4>
      <ReduxCounterExample />
    </div>
  )
}

export default Redux