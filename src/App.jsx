import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatButtons from './components/ChatButton';
import FuelInjectionPumpCategories from './pages/ProductCategoriesPage/FuelInjectionPump';
import Injector from './pages/ProductCategoriesPage/Injector';
import SupplyPumpCategories from './pages/ProductCategoriesPage/SupplyPump';
import NozzleCategories from './pages/ProductCategoriesPage/Nozzle';
import TurboChargerCategories from './pages/ProductCategoriesPage/TurboCharger';
import SensorCategories from './pages/ProductCategoriesPage/Sensor';
import ToolCategories from './pages/ProductCategoriesPage/Tools';
import SocketCategories from './pages/ProductCategoriesPage/Socket';
import NotFound from './pages/NotFound';
import CoverInjector from './pages/ProductCategoriesPage/CoverInjector';
import ContactUs from './pages/Contact';
import EUICategories from './pages/ProductCategoriesPage/EUI';
import { useEffect, useState } from 'react';
import { BsRocketFill } from 'react-icons/bs';
import CustomCursor from './components/CustomCursor';
import PlungerList from './pages/ProductList/Conventional/Plunger';
import SupplyPumpAssyList from './pages/ProductList/CommonRail/SupplyPumpAssy';
import HandPumpList from './pages/ProductList/Conventional/HandPump';
import RotorheadList from './pages/ProductList/Conventional/RotorHead';
import FuelHandPumpAssyList from './pages/ProductList/Conventional/FuelHandPumpAssy';
import LinerFeedPumpList from './pages/ProductList/Conventional/LinerFeedPump';
import PlungerSupplyPumpList from './pages/ProductList/CommonRail/Plunger';
import SCVList from './pages/ProductList/CommonRail/SCV';
import PipeHoseSPList from './pages/ProductList/CommonRail/PipeHoseSupplyPump';
import FilterSupplyPumpList from './pages/ProductList/CommonRail/FilterSupplyPump';
import RotorSetFPList from './pages/ProductList/CommonRail/RotorSetFeedPump';
import CamshaftSupplyPumpList from './pages/ProductList/CommonRail/CamshaftSupplyPump';
import SensorTemperatureList from './pages/ProductList/CommonRail/SensorTemperature';
import RepairKitList from './pages/ProductList/CommonRail/RepairKit';
import ValvePressureRegulatorList from './pages/ProductList/CommonRail/ValvePressureRegulator';
import NozzleAssyPencilList from './pages/ProductList/Conventional/NozzleAssyPencil';
import NozzleAssyInjectorList from './pages/ProductList/Conventional/NozzleAssyInjector';
import NozzleAssyInjector1List from './pages/ProductList/Conventional/NozzleAssyInjector1';
import NozzleFIPList from './pages/ProductList/Conventional/NozzleFIP';
import NozzleFIP1List from './pages/ProductList/Conventional/NozzleFIP1';
import InjectorAssyList from './pages/ProductList/CommonRail/InjectorAssy';
import OrificeValveList from './pages/ProductList/CommonRail/OrificeValve';
import CommandPistonList from './pages/ProductList/CommonRail/CommandPiston';
import ValveSeatRetainingNutList from './pages/ProductList/CommonRail/ValveSeatRetainingNut';
import SolenoidList from './pages/ProductList/CommonRail/Solenoid';
import CupNozzleInjectorList from './pages/ProductList/CommonRail/CupNozzleInjector';
import ControlValveList from './pages/ProductList/CommonRail/ControlValve';
import EUIList from './pages/ProductList/Electric/EUI';
import SensorCKPList from './pages/ProductList/OtherProducts/SensorCKP';
import SensorCommonRailList from './pages/ProductList/OtherProducts/SensorCommonRail';
import SensorLimiterList from './pages/ProductList/OtherProducts/SensorLimiter';
import NozzleTesterList from './pages/ProductList/OtherProducts/NozzleTester';
import CRCList from './pages/ProductList/OtherProducts/CRC';
import PressureGaugeList from './pages/ProductList/OtherProducts/PressureGauge';
import PinToolList from './pages/ProductList/OtherProducts/PinTool';
import StandSketmatList from './pages/ProductList/OtherProducts/StandSketmat';
import NozzleTesterPipeList from './pages/ProductList/OtherProducts/NozzleTesterPipe';
import ToolShimList from './pages/ProductList/OtherProducts/ToolShim';
import PlungerTesterNozzleList from './pages/ProductList/OtherProducts/PlungerTesterNozzle';
import ThreePinInjectorList from './pages/ProductList/OtherProducts/3PinInjector';
import FilterWrenchToolList from './pages/ProductList/OtherProducts/FilterWrenchTool';
import ToolsCat from './pages/ProductList/OtherProducts/ToolsCat';
import HexKeyList from './pages/ProductList/OtherProducts/HexKey';
import TurboAssyList from './pages/ProductList/OtherProducts/TurboAssy';
import CartridgeTurboList from './pages/ProductList/OtherProducts/CartridgeTurbo';
import RepairKitTurboList from './pages/ProductList/OtherProducts/RepairkitTurbo';
import SolenoidTurboList from './pages/ProductList/OtherProducts/SolenoidTurbo';
import SocketSCVInjectorList from './pages/ProductList/OtherProducts/SocketSCVInjector';
import SocketSolenoidValveList from './pages/ProductList/OtherProducts/SocketSolenoidValve';
import SocketOilTemperatureList from './pages/ProductList/OtherProducts/SocketOilTemperature';
import CoverLList from './pages/ProductList/OtherProducts/CoverL';
import CoverTList from './pages/ProductList/OtherProducts/CoverT';
import DeliveryValveInlineList from './pages/ProductList/Conventional/DeliveryValveInline';
import DeliveryValveRotaryList from './pages/ProductList/Conventional/DeliveryValveRotary';
import GasketInlineList from './pages/ProductList/Conventional/GasketInline';
import GasketRotaryList from './pages/ProductList/Conventional/GasketRotary';
import SpringPlungerList from './pages/ProductList/CommonRail/SpringPlunger';
import NozzleInjectorList from './pages/ProductList/CommonRail/NozzleInjector';
import useGaTracker from './useGaTracker';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/*' element={<NotFound />} />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump'
                    element={<FuelInjectionPumpCategories />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector'
                    element={<Injector />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump'
                    element={<SupplyPumpCategories />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle'
                    element={<NozzleCategories />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/electric/eui'
                    element={<EUICategories />}
                />
                <Route
                    exact
                    path='/products/other-products/turbo-charger'
                    element={<TurboChargerCategories />}
                />
                <Route
                    exact
                    path='/products/other-products/sensor'
                    element={<SensorCategories />}
                />
                <Route
                    exact
                    path='/products/other-products/tools'
                    element={<ToolCategories />}
                />
                <Route
                    exact
                    path='/products/other-products/socket'
                    element={<SocketCategories />}
                />

                <Route
                    exact
                    path='/products/other-products/cover-injector'
                    element={<CoverInjector />}
                />
                <Route exact path='/contact' element={<ContactUs />} />

                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/plunger'
                    element={<PlungerList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/hand-pump'
                    element={<HandPumpList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/rotorhead'
                    element={<RotorheadList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/fuel-hand-pump-assy'
                    element={<FuelHandPumpAssyList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/liner-feed-pump'
                    element={<LinerFeedPumpList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-inline'
                    element={<DeliveryValveInlineList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/delivery-valve-rotary'
                    element={<DeliveryValveRotaryList />}
                />
                
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-inline'
                    element={<GasketInlineList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/fuel-injection-pump/gasket-rotary'
                    element={<GasketRotaryList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-pencil'
                    element={<NozzleAssyPencilList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector'
                    element={<NozzleAssyInjectorList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-assy-injector-1'
                    element={<NozzleAssyInjector1List />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-fip'
                    element={<NozzleFIPList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-fip-1'
                    element={<NozzleFIP1List />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/conventional/nozzle/nozzle-fip-1'
                    element={<NozzleFIP1List />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/supply-pump-assy'
                    element={<SupplyPumpAssyList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/plunger'
                    element={<PlungerSupplyPumpList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/scv'
                    element={<SCVList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/pipe-hose-supply-pump'
                    element={<PipeHoseSPList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/filter-supply-pump'
                    element={<FilterSupplyPumpList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/rotor-set-feed-pump'
                    element={<RotorSetFPList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/camshaft-supply-pump'
                    element={<CamshaftSupplyPumpList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/sensor-temperature'
                    element={<SensorTemperatureList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/repair-kit'
                    element={<RepairKitList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/valve-pressure-regulator'
                    element={<ValvePressureRegulatorList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/supply-pump/spring-plunger'
                    element={<SpringPlungerList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/injector-assy'
                    element={<InjectorAssyList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/nozzle-injector'
                    element={<NozzleInjectorList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/orifice-valve'
                    element={<OrificeValveList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/command-piston'
                    element={<CommandPistonList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/valve-seat-retaining-nut'
                    element={<ValveSeatRetainingNutList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/solenoid'
                    element={<SolenoidList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/cup-nozzle-injector'
                    element={<CupNozzleInjectorList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/common-rail/injector/control-valve'
                    element={<ControlValveList />}
                />
                <Route
                    exact
                    path='/products/fuel-injection-systems/electric/eui/eui'
                    element={<EUIList />}
                />
                <Route
                    exact
                    path='/products/other-products/sensor/sensor-ckp'
                    element={<SensorCKPList />}
                />
                <Route
                    exact
                    path='/products/other-products/sensor/sensor-common-rail'
                    element={<SensorCommonRailList />}
                />

                <Route
                    exact
                    path='/products/other-products/sensor/sensor-limiter'
                    element={<SensorLimiterList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/nozzle-tester'
                    element={<NozzleTesterList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/cr-c'
                    element={<CRCList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/pressure-gauge'
                    element={<PressureGaugeList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/pin-tool'
                    element={<PinToolList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/stand-sketmat'
                    element={<StandSketmatList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/nozzle-tester-pipe'
                    element={<NozzleTesterPipeList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/tool-shim'
                    element={<ToolShimList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/plunger-nozzle-tester'
                    element={<PlungerTesterNozzleList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/3-pin-injector'
                    element={<ThreePinInjectorList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/filter-wrench-tool'
                    element={<FilterWrenchToolList />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/tools-cat'
                    element={<ToolsCat />}
                />
                <Route
                    exact
                    path='/products/other-products/tools/hex-key'
                    element={<HexKeyList />}
                />
                <Route
                    exact
                    path='/products/other-products/turbo-charger/turbo-assy'
                    element={<TurboAssyList />}
                />
                <Route
                    exact
                    path='/products/other-products/turbo-charger/cartridge-turbo'
                    element={<CartridgeTurboList />}
                />
                <Route
                    exact
                    path='/products/other-products/turbo-charger/repair-kit-turbo'
                    element={<RepairKitTurboList />}
                />
                <Route
                    exact
                    path='/products/other-products/turbo-charger/solenoid-turbo'
                    element={<SolenoidTurboList />}
                />
                <Route
                    exact
                    path='/products/other-products/socket/socket-scv-injector'
                    element={<SocketSCVInjectorList />}
                />
                <Route
                    exact
                    path='/products/other-products/socket/socket-solenoid-valve'
                    element={<SocketSolenoidValveList />}
                />
                <Route
                    exact
                    path='/products/other-products/socket/socket-oil-temperature'
                    element={<SocketOilTemperatureList />}
                />
                <Route
                    exact
                    path='/products/other-products/cover-injector/cover-l'
                    element={<CoverLList />}
                />
                <Route
                    exact
                    path='/products/other-products/cover-injector/cover-t'
                    element={<CoverTList />}
                />
            </Routes>
            <ChatButtons />
            <CustomCursor />
        </>
    );
};

function App() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 1000) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useGaTracker()

    return (
        <BrowserRouter>
            <CustomCursor />
            <Header />
            <Routing />
            <Footer />
            <div className='fixed bottom-20 right-4 md:bottom-[16%] md:right-[2%] z-[2147483647] flex flex-col space-y-4'>
                {isVisible && (
                    <button
                        className='bg-white hover:scale-110 shadow-md text-gray-500 rounded-full w-10 h-10 flex items-center justify-center'
                        onClick={scrollToTop}
                    >
                        <BsRocketFill />
                    </button>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
