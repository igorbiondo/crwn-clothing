import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map((categories) => (
				<CategoryItem
					key={categories.id}
					category={categories}
				/>
			))}
		</div>
	);
};

export default Directory;
