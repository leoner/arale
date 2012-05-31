<div>
<table class="ui-calendar">
    <thead>
        <tr class="ui-calendar-months">
            <td class="ui-calendar-previous-year">&lt;&lt;</td>
            <td class="ui-calendar-previous-month">&lt;</td>
            <td colspan="3"><span class="month">{{current.month}}</span> <span class="year">{{current.year}}</span></td>
            <td class="ui-calendar-next-month">&gt;</td>
            <td class="ui-calendar-next-year">&gt;&gt;</td>
        </tr>
        <tr class="ui-calendar-weeks">
            {{#each weeks.weeks}}
            <td>{{label}}</td>
            {{/each}}
        </tr>
    </thead>
    <tbody class="ui-calendar-dates">
        {{#table dates}}
        <td class="{{label}}{{#unless available}} disable{{/unless}}">{{date}}</td>
        {{/table}}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="5">Today</td>
            <td colspan="2"><span class="ui-calendar-hour">{{current.hour}}</span> : {{current.minute}}</td>
        </tr>
    </tfoot>
</table>
</div>
