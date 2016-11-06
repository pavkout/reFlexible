import classNames from 'classNames';

module.exports = function initProps(props) {
    if (props) {
        let classes = classNames({
          flex: props.reFlexible,
          'inline-flex': (props.inline || props.inlineFlex) && !props.reFlexible,
          'flex-column': (props.column || props.horizontal) && (!props.row || !props.vertical) ,
          'flex-row': (props.row || props.vertical) && (!props.column || !props.horizontal),
          'flex-wrap': props.wrap,
          'flex-auto': props.flexAuto,
          'items-start': props.alignStart || props.align_Start,
          'items-end': props.alignEnd || props.align_End,
          'items-center': props.alingCenter || props.align_Center,
          'items-baseline': props.baseline,
          'items-stretch': props.stretch,
          'justify-start': props.justifyStart || props.justify_start,
          'justify-end': props.justifyEnd || props.justify_end,
          'justify-center': props.justifyCenter || props.justify_Center,
          'justify-between': props.spaceBetween || props.space_between,
          'justify-around': props.spaceAround || props.space_Around

        });

        return `${classes} ${props.className ? props.className : ''}`;
    }
    return {};
};
