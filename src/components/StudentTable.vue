<template>
<h1>Student Table Component</h1>    

<div class="student_table">
    <table>
        <tr>
            <h3>Student Record</h3>
            <input type="text" placeholder="Serach Student"  />
        </tr>
        <tr>
            <th>student_Id</th>
            <th>student_name</th>
            <th>student_RolNO</th>
            <th>class_Name</th>
        </tr>
        <tr>
            <td>2323NJS</td>
            <td>Zeeshan</td>
            <td>404RUB</td>
            <td>Biology(B)</td>
        </tr>
        <tr>
            <td>2323NJS</td>
            <td>Zeeshan</td>
            <td>404RUB</td>
            <td>Biology(B)</td>
        </tr>
        <tr>
            <td>2323NJS</td>
            <td>Zeeshan</td>
            <td>404RUB</td>
            <td>Biology(B)</td>
        </tr>
    </table>
   
</div>
</template>
<script>

export default {

}
</script>
<style scoped>
.student_table{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
table {
    /* padding: 5px; */
    border:  1px solid goldenrod;
}
.student_table  input{
    padding: 10px;
    width: 200px;
    font-size: 14px;
    margin: 10px;
    float: left;
}
table tr th{
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
}

table tr td{
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
}
</style>
