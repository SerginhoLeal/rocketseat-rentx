import * as Svg from '@svg';

export const getAccessoryIcon = (type: string) => {
  switch (type) {
    case 'acceleration': return Svg.Acceleration;
    case 'arrow': return Svg.Arrow;
    case 'brand': return Svg.Brand;
    case 'car': return Svg.Car;
    case 'done': return Svg.Done;
    case 'electric_motor': return Svg.Energy;
    case 'exchange': return Svg.Exchange;
    case 'turning_diameter': return Svg.Force;
    case 'gasoline': return Svg.Gasoline;
    case 'hybrid': return Svg.Hybrid;
    case 'logoBackgroundGray': return Svg.LogoBackgroundGray;
    case 'logo': return Svg.Logo;
    case 'seats': return Svg.People;
    case 'speed': return Svg.Speed;

    default: return Svg.Speed;
  }
};