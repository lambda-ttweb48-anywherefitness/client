export default function FormatDate( item ){
        const date = new Date(item.replace(/(\d{2})\.(\d{2})\.(\d{4})/,'$3-$2-$1')).toLocaleString("en-US", {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }).replace(/,/g, "").split(' ');

        return date[0] + ', ' + date[1] + ' ' + date[2] + ' @ ' + date[3] + ' ' + date[4];
}