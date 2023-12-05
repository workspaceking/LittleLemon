import PropTypes from 'prop-types';
import './tabs.css';
export const Tabs = ({ children, tabs = [], onTabChange }) => {
  return (
    <div
      role={'tablist'}
      className="vstack justify-start items-start w-full gap-2.5 p-2.5 rounded-2xl bg-gray"
    >
      <div className="hstack justify-start items-start w-full tabs">
        {tabs.map(({ label, badge, icon, active }, i) => (
          <button
            role={'tab'}
            onClick={(e) => {
              onTabChange(label, i);
            }}
            key={i}
            className={`cursor-pointer tab hstack flex-1 justify-center items-center  h-20 relative gap-3  ${
              active ? 'bg-gray' : 'bg-primary'
            }`}
          >
            <p
              className={`text-xl text-center ${
                active ? 'text-dark' : 'text-surface'
              }`}
            >
              {label}
            </p>
            {icon && (
              <div
                className={`hstack justify-start items-center relative gap-3 p-1.5 rounded-lg ${
                  active ? 'bg-primary' : 'bg-transprent'
                }`}
              >
                <img alt={'tab icon'} src={icon} className={'w-5 h-5'} />
                <div className="hstack justify-center items-center w-[18px] h-[18px] absolute left-[21px] top-[-9px] rounded-[9px] bg-secondary border-[1.5px] border-primary">
                  <p className="text-base font-medium text-left capitalize text-pink">
                    {badge}
                  </p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      {children}
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
