import { useState } from "react";
import one from './img/one.svg'
import two from './img/two.svg'
import three from './img/three.svg'
import four from './img/four.svg'
import preview from './img/preview.svg'
import first from './img/first.svg'
import second from './img/second.svg'
import pre from './img/pre.svg'
import rep from './img/rep.svg'
import erp from './img/erp.svg'


function App() {
	return (
		<div className="container overflow-y-scroll overflow-x-hidden">
			<div className="flex overflow-x-scroll overflow-y-hidden gap-4">
				<div className="flex flex-col items-start">
					<div className="w-[105px] h-[105px] overflow-hidden">
						<img src={one} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="text2">1(Remastered)</h3>
				</div>
				<div className="flex flex-col items-start">
					<div className="w-[105px] h-[105px] overflow-hidden">
						<img src={two} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="text2">Lana Del Rey</h3>
				</div>
				<div className="flex flex-col items-start">
					<div className="w-[105px] h-[105px] overflow-hidden">
						<img src={three} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="text2">Marvin Gaye</h3>
				</div>
				<div className="flex flex-col items-start">
					<div className="w-[105px] h-[105px] overflow-hidden">
						<img src={four} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="text2">Indie Pop</h3>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<img src={preview} alt="" />
					<div>
						<h4 className="text-medium">#SPOTIFYWRAPPED</h4>
						<h2 className="demi-bold">Your 2021 in review</h2>
					</div>
				</div>
				<div className="flex gap-4 overflow-x-scroll">
					<div className="flex flex-col">
						<div className="w-[153px] h-[153px] overflow-hidden">
							<img src={first} alt="" className="w-full h-full object-cover" />
						</div>
						<h3 className="h-[29px] bold">Your Top Songs 2021</h3>
					</div>
					<div className="flex flex-col">
						<div className="w-[153px] h-[153px] overflow-hidden">
							<img src={second} alt="" className="w-full h-full object-cover" />
						</div>
						<h3 className="h-[29px] bold">Your Artists Revealed</h3>
					</div>
				</div>
			</div>
			<h3 className="demi-bold">Editor’s picks</h3>
			<div className="flex gap-4 overflow-x-scroll pt-3">
				<div className="flex flex-col">
					<div className="w-[153px] h-[153px] overflow-hidden">
						<img src={rep} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="h-[29px] bold1">Ed Sheeran, Big Sean, Juice WRLD, Post Malone</h3>
				</div>
				<div className="flex flex-col">
					<div className="w-[153px] h-[153px] overflow-hidden">
						<img src={pre} alt="" className="w-full h-full object-cover" />
					</div>
					<h3 className="h-[29px] bold1">Mitski, Tame Impala, Glass Animals, Charli XCX</h3>
				</div>
				<div className="flex flex-col">
					<div className="w-[153px] h-[153px] overflow-hidden">
						<img src={erp} alt="" className="w-full h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
