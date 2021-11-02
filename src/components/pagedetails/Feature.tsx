import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface FeatureProps {
    superheroe: any;
    colorBg: string;
  }

const buildData = (superheroe: any) => {
  let data = {};
  Object.defineProperty(data, "name", {value: superheroe.name});
  Object.keys(superheroe.powerstats).map((poder) => Object.defineProperty(data, poder, {value: superheroe.powerstats[poder]}));
  return [data];
}

const buildListPowerColor = (poderes: any) => {
	let listObj: any = [];
	const colors: any = ["#26c6dc", "#27a59a", "#66bb6a", "#c1ca33", "#ffd737", "#ff7244"];
	let index = 0;
	Object.keys(poderes).map((poder) => {
									listObj.push({namePower: poder, color: colors[index]});
									index++;
								}
							);
	return listObj;
}


const Feature = ({ superheroe, colorBg }: FeatureProps) => {
  	
	const data2 = buildData(superheroe);
	const listPowersColors = buildListPowerColor(superheroe.powerstats);

	return (
		<BarChart
			width={500}
			height={300}
			data={data2}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			{
				listPowersColors.map((elem: any)=> {
					return <Bar key={elem.namePower} dataKey={elem.namePower} fill={elem.color} />
				})
			}
		</BarChart>
    );
  };

  export default  Feature;