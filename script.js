$(window).on('load', function () {
    try {
        $.get('summary.yml', function (result) {
            const doc = jsyaml.load(result);
            var numBuckets = 0;
            var numBalls = 0;
            doc.badmintons.forEach((element, i) => {
                // Update the table
                $("#records thead").before(`
                    <tbody>
                        <tr>
                            <th scope="row">` + (i + 1) + `</th>
                            <td>` + element.date + `</td>
                            <td>` + element.price + `</td>
                            <td>` + element.bucket + `</td>
                            <td>` + element.details + `</td>
                            <td>` + element.thanks + `</td>
                        </tr>
                    </tbody>
                `);

                // Summary
                numBuckets = numBuckets + element.bucket;
                numBalls = numBalls + element.ball;

            });

            $('#buckets').text(numBuckets);
            $('#balls').text(numBuckets * 6);
            $('#dateModified').text(element.date);
        });
    } catch (e) {
        console.log(e);
    }
});
