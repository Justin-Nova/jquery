function reset() {
    $(".boxvd *").removeClass("traversal");
}

function parent_ele() {
    reset();
    $("#selectedele").parent().addClass("traversal");
}

function children_ele() {
    reset();
    $("#selectedele").children().addClass("traversal");
}
function siblings_ele() {
    reset();
    $("#selectedele").siblings().addClass("traversal");
}
function next_ele() {
    reset();
    $("#selectedele").next().addClass("traversal");
}
function nextAll_ele() {
    reset();
    $("#selectedele").nextAll().addClass("traversal");
}
function prev_ele() {
    reset();
    $("#selectedele").prev().addClass("traversal");
}
function prevAll_ele() {
    reset();
    $("#selectedele").prevAll().addClass("traversal");
}
function eq_ele() {
    reset();
    $("#selectedele").nextAll().eq(1).addClass("traversal");
}
function find_ele() {
    reset();
    $("#selectedele").find('i,span').addClass("traversal");
}