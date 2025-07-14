document.write("<table border='1' cellspacing='0'>");
for (let i = 1; i < 11; i++) {
    document.write("<tr align='center'>");
    for (let j = 1; j < 11; j++) {
        if ((i + j) % 2 == 0) {
            document.write("<td bgcolor='yellow'>" + i*j + "</td>");
        } else {
            document.write("<td bgcolor='red'>" + i*j + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<br>");

// вариант 2
document.write("<table border='1' cellspacing='0'>");

document.write("<tr><td></td>");
for (let j = 1; j < 11; j++) {
    document.write("<td align='center'>" + j + "</td>");
}
document.write("</tr>");

for (let i = 1; i < 11; i++) {
    document.write("<tr>");
    document.write("<td align='center'>" + i + "</td>");
    for (let j = 1; j < 11; j++) {
        if ((i + j) % 2 == 0) {
            document.write("<td bgcolor='yellow' align='center'>" + i*j + "</td>");
        } else {
            document.write("<td bgcolor='red' align='center'>" + i*j + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");