import React, {
	useState,
	useEffect,
	useRef
} from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as framerMotion from "https://cdn.skypack.dev/framer-motion@5.5.5";

const { motion } = framerMotion;

const Main = ({ children }) => {
	return <main className="h-screen">{children}</main>;
};

const button = {
	rest: { scale: 1 },
	hover: { scale: 1.1 },
	pressed: { scale: 2 }
};

const arrow = {
	rest: { rotate: 0 },
	hover: { rotate: 360, transition: { duration: 0.4 } }
};

const Refresh = ({ onClick }) => {
	return (
		<motion.div
			className="refresh"
			onClick={onClick}
			variants={button}
			initial={{
				x: 0
			}}
			whileHover="hover"
			whileTap="pressed"
		>
			<motion.svg
				width="16"
				height="16"
				xmlns="http://www.w3.org/2000/svg"
				variants={arrow}
			>
				<path
					d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z"
					fill="#fff"
					fillRule="nonzero"
				/>
			</motion.svg>
		</motion.div>
	);
};

const Example = () => {
	const constraintsRef = useRef(null);

	const variants = {
		visible: (custom) => ({
			opacity: 1,
			transition: { delay: custom * 0.2 }
		})
	};

	return (
		<>
			<motion.div className="drag-area" ref={constraintsRef} />
			<motion.div
				drag
				dragConstraints={constraintsRef}
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				animate={{
					x: [0, 500, 500, 300, 600, 0],
					y: [0, 200, 400, 100, 300, 250, 0]
				}}
				transition={{ duration: 6, loop: Infinity, ease: "easeInOut" }}
				onAnimationComplete={(definition) => {}}
			/>
		</>
	);
};

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<Main>
				<Refresh onClick={() => setCount(count + 1)} />
				<div className="example-container">
					<Example key={count} />
				</div>
			</Main>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
