import PropTypes from 'prop-types';
import './tabs.css';
export const Tabs = ({ tabs = [], onTabChange }) => {
  return (
    <div className="flex justify-start items-start w-full tabs">
      {tabs.map(({ label, badge, icon, active }, i) => (
        <div
          onClick={(e) => {
            onTabChange(label, i);
          }}
          key={i}
          className={`cursor-pointer tab flex flex-1 justify-center items-center  h-20 relative gap-3  ${
            active ? 'bg-gray' : 'bg-primary'
          }`}
        >
          <p
            className={`w-10 text-xl text-center ${
              active ? 'text-dark' : 'text-surface'
            }`}
          >
            {label}
          </p>
          {icon && (
            <div
              className={`flex justify-start items-center relative gap-3 p-1.5 rounded-lg ${
                active ? 'bg-primary' : 'bg-transprent'
              }`}
            >
              <img src={icon} className={'w-5 h-5'} />
              <div className="flex justify-center items-center w-[18px] h-[18px] absolute left-[21px] top-[-9px] rounded-[9px] bg-secondary border-[1.5px] border-primary">
                <p className="text-base font-medium text-left capitalize text-pink">
                  {badge}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* <div className="flex flex-1 flex-col justify-center items-center  h-20 relative rounded-tl-2xl bg-primary">
        <p className="text-xl text-center text-gray">Orders</p>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center  h-20 relative rounded-tr-2xl bg-primary">
        <p className="text-xl text-center text-gray">Reservations</p>
      </div> */}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      badge: PropTypes.number,
      label: PropTypes.string.isRequired,
      active: PropTypes.bool,
    }).isRequired,
  ),
  onTabChange: PropTypes.func,
};
