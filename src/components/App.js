import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
// import QuestionFormNonControle from './QuestionFormNonControle'
// import QuestionFormControle from './QuestionFormControle'
import Footer from './Footer'

function App() {
	return (
		<div>
			<Banner />
      		<Cart />
			<ShoppingList />
			{/* <QuestionFormNonControle /> */}
			{/* <QuestionFormControle /> */}
			<Footer />
		</div>
	)
}

export default App